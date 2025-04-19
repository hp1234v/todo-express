#!/usr/bin/env bash
#   Use this script to test if a given TCP host/port are available

set -e

host="$1"
shift
port="$1"
shift

timeout=15
quiet=0
cmd="$@"

echoerr() {
  if [ "$quiet" -ne 1 ]; then echo "$@" 1>&2; fi
}

wait_for() {
  for i in `seq $timeout` ; do
    nc -z "$host" "$port" > /dev/null 2>&1
    result=$?
    if [ $result -eq 0 ] ; then
      return 0
    fi
    sleep 1
  done
  return 1
}

echo "⏳ Waiting for $host:$port..."

if wait_for; then
  echo "✅ $host:$port is available!"
else
  echoerr "❌ Timeout after ${timeout}s waiting for $host:$port"
  exit 1
fi

exec $cmd