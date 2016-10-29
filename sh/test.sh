(
  printf "Checking Code Style... "
  standard > stdout.tmp 2> stderr.tmp && (
    echo "passed"
  ) || (
    echo "failed" >&2
    cat stderr.tmp >&2
    cat stdout.tmp
    exit 2
  )
) && (
  [[ "$SKIP_UNIT_TEST" == 'TRUE' ]] || (
    echo "Running unit test..."
    echo 'Set $SKIP_UNIT_TEST to "TRUE" to skip this test'
    node test
  )
)
