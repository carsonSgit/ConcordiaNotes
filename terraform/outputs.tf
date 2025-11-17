output "repository_url" {
  description = "URL of the GitHub repository"
  value       = github_repository.concordia_notes.html_url
}

output "pages_url" {
  description = "URL of the GitHub Pages site"
  value       = "https://${var.github_owner}.github.io/${var.repository_name}"
}

output "pages_status" {
  description = "Status of GitHub Pages"
  value       = github_repository.concordia_notes.pages
}

