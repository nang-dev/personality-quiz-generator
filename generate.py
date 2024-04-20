import argparse
import json
from jinja2 import Environment, FileSystemLoader
import os

# Parse command-line arguments
parser = argparse.ArgumentParser(description='Generate HTML from templates.')
parser.add_argument('--example', action='store_true',
                    help='Use example assets for questions and results.')
args = parser.parse_args()

# Determine the assets path based on the --example flag
assets_path = 'example/assets' if args.example else 'assets'

# Load configuration from the chosen directory
config_path = 'config.json'
with open(config_path) as config_file:
    config = json.load(config_file)

# Update config with the dynamic path for questions and results
config['questions_js'] = f'{assets_path}/questions/questions.js'
config['results_js'] = f'{assets_path}/results/results.js'

# Set up Jinja2 environment and load the templates
env = Environment(loader=FileSystemLoader('.'))
index_template = env.get_template('templates/index_template.html')
results_template = env.get_template('templates/results_template.html')

# Generate the HTML output for index.html
index_html_output = index_template.render(config)
# Generate the HTML output for results.html
# Assuming you have or will add necessary keys in your config for results page
results_html_output = results_template.render(config)

# Write the generated HTML to files
with open('index.html', 'w') as index_output_file:
    index_output_file.write(index_html_output)

with open('results.html', 'w') as results_output_file:
    results_output_file.write(results_html_output)

print(f"Success: HTML generated and written to: {os.getcwd()}/index.html and {os.getcwd()}/results.html")