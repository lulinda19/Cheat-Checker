package edu.upenn.cis350.cheatchecker;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends Activity {

    public static final int homeActivityId = 1;

    String loginType = "";

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        loginType = getIntent().getStringExtra("UserStatus");
    }

    public void onLoginButtonClick(View view) {
        Intent i = new Intent(this, HomeScreenActivity.class);

        //check for whether person is in database

        String baseurl = "http://localhost:5000/"

        String addThis = "students/conswang@seas.upenn.edu";
        ;

        String url = "";

        EditText emailBox = findViewById(R.id.enter_email);
        String email = emailBox.getText().toString();

        i.putExtra("Email", email);

        startActivityForResult(i, homeActivityId);
    }
}
