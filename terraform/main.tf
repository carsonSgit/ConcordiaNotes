terraform {
  required_version = ">= 1.0"
  
  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }
  }
}

provider "github" {
  token = var.github_token
  owner = var.github_owner
}

resource "github_repository" "concordia_notes" {
  name        = var.repository_name
  description = "Notes taken from all the classes I've taken post-secondary"
  visibility  = "public"
  
  has_issues      = true
  has_wiki        = false
  has_projects    = false
  has_downloads   = true
  
  # Enable GitHub Pages
  pages {
    source {
      branch = "gh-pages"
      path   = "/"
    }
    
    build_type = "workflow"
  }
}

# Configure branch protection for main branch (optional)
resource "github_branch_protection" "main" {
  repository_id = github_repository.concordia_notes.node_id
  pattern       = "main"
  
  enforce_admins = false
  
  required_pull_request_reviews {
    dismiss_stale_reviews = true
  }
}

# Create the gh-pages branch if it doesn't exist
resource "github_branch" "gh_pages" {
  repository = github_repository.concordia_notes.name
  branch     = "gh-pages"
}

