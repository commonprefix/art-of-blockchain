import os
import re

DOCS_DIR = "docs"

# Define replacements for GitBook hint blocks
HINT_START_PATTERN = re.compile(r"\{%\s*hint\s+style=\"(.*?)\"\s*%\}")
HINT_END_PATTERN = re.compile(r"\{%\s*endhint\s*%\}")

def convert_hint_block(content):
    lines = content.splitlines()
    new_lines = []
    inside_hint = False
    hint_type = ""

    for line in lines:
        start_match = HINT_START_PATTERN.match(line.strip())
        end_match = HINT_END_PATTERN.match(line.strip())

        if start_match:
            inside_hint = True
            hint_type = start_match.group(1).capitalize()
            new_lines.append(f"> 💡 **{hint_type}**")
        elif end_match:
            inside_hint = False
        elif inside_hint:
            new_lines.append(f"> {line}")
        else:
            new_lines.append(line)

    return "\n".join(new_lines)

def process_file(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    if "{% hint" in content:
        print(f"🔧 Converting: {path}")
        converted = convert_hint_block(content)

        # Backup original
        backup_path = path + ".bak"
        with open(backup_path, "w", encoding="utf-8") as f:
            f.write(content)

        with open(path, "w", encoding="utf-8") as f:
            f.write(converted)

def walk_docs():
    for dirpath, _, filenames in os.walk(DOCS_DIR):
        for filename in filenames:
            if filename.endswith(".md"):
                full_path = os.path.join(dirpath, filename)
                process_file(full_path)

if __name__ == "__main__":
    walk_docs()
    print("✅ All Markdown files processed.")

