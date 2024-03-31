import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');

	// <h1>Welcome to your library project</h1>
// <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
// <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	await expect(page.locator('h1')).toHaveText('Welcome to your library project');
});
