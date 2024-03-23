import { useState } from 'react';
import { signIn } from 'next-auth/client';

const signInPage = () => {
const handleSignInGoogle = async () => {
    const result = await signIn('google');
    if (result.error) {

        // Handle sign-in error
        console.error(result.error);
    } else {
        // Redirect to dashboard or desired page

        // Example: router.push('/dashboard');
    }
};

const handleSignInGithub = async () => {
    const result = await signIn('github');

    if (result.error) {
        // Handle sign-in error
        console.error(result.error);
    } else {
        // Redirect to dashboard or desired page
        // Example: router.push('/dashboard');
    }
};

return (
    <div>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Sign In</button>
            <button onClick={handleSignInGoogle}>Sign In with Google</button>
            <button onClick={handleSignInGithub}>Sign In with GitHub</button>
        </form>
    </div>
);
}

export default SignInPage;