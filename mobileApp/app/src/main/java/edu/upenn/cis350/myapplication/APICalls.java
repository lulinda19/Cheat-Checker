package edu.upenn.cis350.myapplication;

import android.util.Log;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

public class APICalls {
    private static String baseURL = "http://10.0.2.2:5000/";

    public static boolean authenticateUser(String email, String password){
        String strUrl = baseURL + "instructors/email/" + email;
        URL url;
        try {
            url = new URL(strUrl);

            AccessWebTask task = new AccessWebTask();
            task.execute(url);
            String actEmail = task.get();

            return actEmail.equals(email);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public static boolean createUser(String firstName, String lastName, String email, String password){
        //http://localhost:5000/students/create2?email=hi@gmail.com&password=28736&firstName=joe&lastName=smith
        String strUrl = baseURL + "/instructors/create2?email=" + email + "&password=" + password
                + "&firstName=" + firstName + "&lastName=" + lastName;
        URL url;
        try {
            url = new URL(strUrl);

            HttpURLConnection conn = (HttpURLConnection)url.openConnection();
            conn.setRequestMethod("GET");


            // open connection and send HTTP request
            conn.connect();

            // now the response comes back
            int responseCode = conn.getResponseCode();


            // make sure the response has "200 OK" as the status
            return (responseCode == 200);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return false;
    }

}
