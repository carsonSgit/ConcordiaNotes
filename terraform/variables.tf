variable "github_token" {
  description = "GitHub personal access token"
  type        = string
  sensitive   = true
}

variable "github_owner" {
  description = "GitHub username or organization"
  type        = string
  default     = "carsonsgit"
}

variable "repository_name" {
  description = "Name of the GitHub repository"
  type        = string
  default     = "ConcordiaNotes"
}

