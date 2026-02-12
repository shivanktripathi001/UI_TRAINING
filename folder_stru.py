#!/usr/bin/env python3
"""
Project Structure Creator
Creates a folder with HTML, CSS, and JS files for web development
"""

import os
import sys

def create_project_structure(folder_name):
    """
    Creates a project folder with HTML, CSS, and JS files
    
    Args:
        folder_name (str): Name of the project folder to create
    """
    try:
        # Create main project folder
        if os.path.exists(folder_name):
            print(f"⚠️  Folder '{folder_name}' already exists!")
            response = input("Do you want to continue anyway? (y/n): ")
            if response.lower() != 'y':
                print("❌ Operation cancelled.")
                return
        else:
            os.makedirs(folder_name)
            print(f"✅ Created folder: {folder_name}")
        
        # Create index.html
        html_path = os.path.join(folder_name, 'index.html')
        html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{folder_name}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to {folder_name}</h1>
        <p>Your project structure is ready!</p>
    </div>
    
    <script src="script.js"></script>
</body>
</html>"""
        
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        print(f"✅ Created file: {html_path}")
        
        # Create style.css
        css_path = os.path.join(folder_name, 'style.css')
        css_content = """/* CSS Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    text-align: center;
    max-width: 600px;
}

h1 {
    color: #333;
    margin-bottom: 1rem;
}

p {
    color: #666;
    font-size: 1.1rem;
}"""
        
        with open(css_path, 'w', encoding='utf-8') as f:
            f.write(css_content)
        print(f"✅ Created file: {css_path}")
        
        # Create script.js
        js_path = os.path.join(folder_name, 'script.js')
        js_content = """// JavaScript
console.log('Project loaded successfully! 🚀');

// Add your JavaScript code here
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is ready!');
});"""
        
        with open(js_path, 'w', encoding='utf-8') as f:
            f.write(js_content)
        print(f"✅ Created file: {js_path}")
        
        # Print success message
        print("\n" + "="*50)
        print(f"🎉 Project '{folder_name}' created successfully!")
        print("="*50)
        print("\nFolder Structure:")
        print(f"{folder_name}/")
        print("├── index.html")
        print("├── style.css")
        print("└── script.js")
        print("\n💡 Tip: Open the folder in VS Code and start coding!")
        
    except Exception as e:
        print(f"❌ Error: {e}")
        sys.exit(1)


def main():
    """Main function to run the script"""
    print("\n" + "="*50)
    print("  PROJECT STRUCTURE CREATOR")
    print("="*50 + "\n")
    
    if len(sys.argv) > 1:
        # Folder name provided as command line argument
        folder_name = sys.argv[1]
    else:
        # Ask for folder name
        folder_name = input("Enter the project folder name: ").strip()
        
        if not folder_name:
            print("❌ Error: Folder name cannot be empty!")
            sys.exit(1)
    
    create_project_structure(folder_name)


if __name__ == "__main__":
    main()