import assert from "assert";
import { daysUntilRelese } from "./task_3-3.mjs";

// Import the function to test

// Helper to create dates
function createDate(str) {
    return new Date(str);
}

// Test: release date is 5 days after today
{
    const today = createDate("2024-06-01");
    const releaseDate = createDate("2024-06-06");
    const result = daysUntilRelese(today, releaseDate);
    assert.strictEqual(result, 5, "Should return 5 days");
}

// Test: release date is today
{
    const today = createDate("2024-06-01");
    const releaseDate = createDate("2024-06-01");
    const result = daysUntilRelese(today, releaseDate);
    assert.strictEqual(result, 0, "Should return 0 days");
}

// Test: release date is before today
{
    const today = createDate("2024-06-10");
    const releaseDate = createDate("2024-06-05");
    const result = daysUntilRelese(today, releaseDate);
    assert.strictEqual(result, -5, "Should return -5 days");
}

// Test: release date is 1 day after today
{
    const today = createDate("2024-06-01");
    const releaseDate = createDate("2024-06-02");
    const result = daysUntilRelese(today, releaseDate);
    assert.strictEqual(result, 1, "Should return 1 day");
}

// Test: release date is less than a day after today (should round up)
{
    const today = createDate("2024-06-01T00:00:00");
    const releaseDate = createDate("2024-06-01T12:00:00");
    const result = daysUntilRelese(today, releaseDate);
    assert.strictEqual(result, 1, "Should round up to 1 day");
}

console.log("All tests passed for daysUntilRelese.");

