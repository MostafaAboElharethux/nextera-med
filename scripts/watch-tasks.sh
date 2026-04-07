#!/bin/bash
echo "=== NESTERA PRO TASKS ==="
echo "ACTIVE:"; ls tasks/active/ 2>/dev/null | sed 's/^/  /' || echo "  (empty)"
echo "QUEUE:";  ls tasks/queue/  2>/dev/null | sed 's/^/  /' || echo "  (empty)"
echo "DONE:";   ls tasks/done/   2>/dev/null | sed 's/^/  /' || echo "  (empty)"
echo "========================="
