package edu.upenn.cis350.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class HomeScreenActivity extends AppCompatActivity {

    String email = "";
    public static final int flaggedActivityId = 1;
    public static final int editProfileActivityId = 2;
    public static final int joinClassActivityId = 3;
    public static final int keywordActivityId = 4;
    public static final int classListActivityId = 5;
    public static final int notificationActivityId = 6;
    public static final int uploadedActivityId = 7;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home_screen);

        email = getIntent().getStringExtra("Email");
    }


    public void onFlaggedButtonClick(View view) {
        Intent i = new Intent(this, FlaggedUsersActivity.class);

        i.putExtra("Email", email);

        startActivityForResult(i, flaggedActivityId);
    }


    public void onEditProfileButtonClick(View view) {
        Intent i = new Intent(this, EditProfileActivity.class);

        i.putExtra("Email", email);

        startActivityForResult(i, editProfileActivityId);
    }

    public void onJoinClassButtonClick(View view) {
        Intent i = new Intent(this, JoinClassActivity.class);

        i.putExtra("Email", email);

        startActivityForResult(i, joinClassActivityId);
    }

    public void onKeywordButtonClick(View view) {
        Intent i = new Intent(this, KeywordActivity.class);

        i.putExtra("Email", email);

        startActivityForResult(i, keywordActivityId);
    }

    public void onClassListButtonClick(View view) {
        Intent i = new Intent(this, ClassListActivity.class);

        i.putExtra("Email", email);

        startActivityForResult(i, classListActivityId);
    }

    public void onNotificationButtonClick(View view) {
        Intent i = new Intent(this, NotificationActivity.class);

        i.putExtra("Email", email);

        startActivityForResult(i, notificationActivityId);
    }

    public void onUploadedButtonClick(View view) {
        Intent i = new Intent(this, UploadedActivity.class);

        i.putExtra("Email", email);

        startActivityForResult(i,uploadedActivityId);
    }
}
