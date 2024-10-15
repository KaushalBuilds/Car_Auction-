// app/auth/signup/page.js
export default function SignupPage() {
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                {/* Form fields for user signup */}
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
