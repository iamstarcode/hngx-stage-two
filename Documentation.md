# Project: hngx-stage-two

# 📁 Collection: api

## End-point: Get User

### Method: GET

> ```
> {{baseUrl}}/api/:userId
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Response: 200

```json
{
  "name": "<string>",
  "user_id": "<double>"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update User

### Method: PUT

> ```
> {{baseUrl}}/api/:userId
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Body (**raw**)

```json
{
  "name": "<string>"
}
```

### Response: 200

```json
{}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete User

### Method: DELETE

> ```
> {{baseUrl}}/api/:userId
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Response: 200

```json
{
  "name": "<string>",
  "user_id": "<double>"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create User

### Method: POST

> ```
> {{baseUrl}}/api
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Accept       | application/json |

### Body (**raw**)

```json
{
  "name": "<string>"
}
```

### Response: 201

```json
{
  "user_id": "<double>",
  "name": "<string>"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
