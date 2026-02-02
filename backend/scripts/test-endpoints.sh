#!/bin/bash
# Test all API endpoints
# Usage: bash test-endpoints.sh

API_URL="http://localhost:5000"
TOKEN=""

echo "🧪 Testing Solar Buy-Side API Endpoints"
echo "========================================="
echo ""

# Test 1: Health check
echo "1️⃣  Testing health endpoint..."
HEALTH=$(curl -s -X GET "$API_URL/health")
echo "Response: $HEALTH"
if echo "$HEALTH" | grep -q '"success":true'; then
  echo "✅ Health check passed"
else
  echo "❌ Health check failed"
fi
echo ""

# Test 2: Login
echo "2️⃣  Testing login endpoint..."
LOGIN=$(curl -s -X POST "$API_URL/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"testpass123"}')
echo "Response: $LOGIN"
if echo "$LOGIN" | grep -q '"success":true'; then
  TOKEN=$(echo "$LOGIN" | grep -o '"token":"[^"]*"' | cut -d'"' -f4)
  echo "✅ Login successful"
  echo "Token: ${TOKEN:0:20}..."
else
  echo "❌ Login failed"
fi
echo ""

# Test 3: Verify token
if [ ! -z "$TOKEN" ]; then
  echo "3️⃣  Testing verify token endpoint..."
  VERIFY=$(curl -s -X GET "$API_URL/api/auth/verify" \
    -H "Authorization: Bearer $TOKEN")
  echo "Response: $VERIFY"
  if echo "$VERIFY" | grep -q '"success":true'; then
    echo "✅ Token verification passed"
  else
    echo "❌ Token verification failed"
  fi
  echo ""
fi

# Test 4: Newsletter subscription
echo "4️⃣  Testing newsletter subscription..."
NEWSLETTER=$(curl -s -X POST "$API_URL/api/newsletter/subscribe" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test-$(date +%s)@example.com\"}")
echo "Response: $NEWSLETTER"
if echo "$NEWSLETTER" | grep -q '"success":true'; then
  echo "✅ Newsletter subscription successful"
else
  echo "❌ Newsletter subscription failed"
fi
echo ""

# Test 5: Ebook lead
echo "5️⃣  Testing ebook lead save..."
EBOOK=$(curl -s -X POST "$API_URL/api/ebook/save-lead" \
  -H "Content-Type: application/json" \
  -d "{\"nome\":\"Test\",\"sobrenome\":\"User\",\"email\":\"ebook-$(date +%s)@example.com\",\"celular\":\"11987654321\"}")
echo "Response: $EBOOK"
if echo "$EBOOK" | grep -q '"success":true'; then
  echo "✅ Ebook lead saved successfully"
else
  echo "❌ Ebook lead save failed"
fi
echo ""

# Test 6: Analytics event
echo "6️⃣  Testing analytics event tracking..."
SESSION_ID=$(uuidgen 2>/dev/null || cat /proc/sys/kernel/random/uuid 2>/dev/null || echo "test-session-$(date +%s)")
ANALYTICS=$(curl -s -X POST "$API_URL/api/analytics/event" \
  -H "Content-Type: application/json" \
  -d "{\"event_type\":\"page_view\",\"session_id\":\"$SESSION_ID\",\"page_url\":\"/\"}")
echo "Response: $ANALYTICS"
if echo "$ANALYTICS" | grep -q '"success":true'; then
  echo "✅ Analytics event tracked successfully"
else
  echo "❌ Analytics event tracking failed"
fi
echo ""

# Test 7: Admin metrics (requires token)
if [ ! -z "$TOKEN" ]; then
  echo "7️⃣  Testing admin metrics endpoint..."
  METRICS=$(curl -s -X GET "$API_URL/api/admin/metrics" \
    -H "Authorization: Bearer $TOKEN")
  echo "Response: $METRICS"
  if echo "$METRICS" | grep -q '"success":true'; then
    echo "✅ Admin metrics retrieved successfully"
  else
    echo "❌ Admin metrics retrieval failed"
  fi
  echo ""
fi

# Test 8: Admin ebook leads (requires token)
if [ ! -z "$TOKEN" ]; then
  echo "8️⃣  Testing admin ebook leads endpoint..."
  LEADS=$(curl -s -X GET "$API_URL/api/admin/leads/ebook" \
    -H "Authorization: Bearer $TOKEN")
  echo "Response: $LEADS"
  if echo "$LEADS" | grep -q '"success":true'; then
    echo "✅ Admin ebook leads retrieved successfully"
  else
    echo "❌ Admin ebook leads retrieval failed"
  fi
  echo ""
fi

# Test 9: Admin newsletter subscribers (requires token)
if [ ! -z "$TOKEN" ]; then
  echo "9️⃣  Testing admin newsletter subscribers endpoint..."
  SUBS=$(curl -s -X GET "$API_URL/api/admin/leads/newsletter" \
    -H "Authorization: Bearer $TOKEN")
  echo "Response: $SUBS"
  if echo "$SUBS" | grep -q '"success":true'; then
    echo "✅ Admin newsletter subscribers retrieved successfully"
  else
    echo "❌ Admin newsletter subscribers retrieval failed"
  fi
  echo ""
fi

echo "========================================="
echo "✅ All tests completed!"
