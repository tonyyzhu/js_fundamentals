myfunction <- function() {
  x <- rnorm(100)
  mean(x)
}

second <- function(y) {
  y <- rnorm(length(y))
}