package edu.upenn.cis350.cheatchecker;

import android.app.Activity;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends Activity {

    public static final int homeActivityId = 1;
    public static final int createAccountActivityId = 2;

    String loginType = "";

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        loginType = getIntent().getStringExtra("UserStatus");
    }

    public void onLoginButtonClick(View view) {
        Intent i = new Intent(this, HomeScreenActivity.class);

        final EditText emailBox = findViewById(R.id.enter_email);
        final EditText passwordBox = findViewById(R.id.edit_password);
        String email = emailBox.getText().toString();
        String password = passwordBox.getText().toString();

        //check for whether person is in database
        if (APICalls.authenticateUser(email, password)){
            i.putExtra("Email", email);
            startActivityForResult(i, homeActivityId);
        } else{
            String text = "Incorrect email and/or password, try again or create an account.";
            Toast toast =
                    Toast.makeText(getApplicationContext(), text, Toast.LENGTH_LONG);
            toast.show();
            new AsyncTask<String, String, String>() {
                protected String doInBackground(String... inputs) {
                    try {
                        Thread.sleep(3000);
                    } catch (Exception e) {

                    }
                    return null;
                }
                protected void onPostExecute(String input) {
                    emailBox.setText("");
                    passwordBox.setText("");
                }
            }.execute();
        }
    }

    public void onCreateAccountButtonClick(View view) {
        //alter this so it adds someone to the database
        Intent i = new Intent(this, CreateAccountActivity.class);
        final EditText emailBox = findViewById(R.id.enter_email);
        final EditText passwordBox = findViewById(R.id.edit_password);
        String email = emailBox.getText().toString();
        String password = passwordBox.getText().toString();
        i.putExtra("Email", email);
        i.putExtra("Password", password);
        startActivityForResult(i, createAccountActivityId);
    }
}
