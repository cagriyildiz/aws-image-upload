package com.cagriyildiz.awsimageupload.datastore;

import com.cagriyildiz.awsimageupload.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {

    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();

    static {
        USER_PROFILES.add(
                new UserProfile(UUID.fromString("41222097-04f0-4c6c-a031-9d5e7fe9da30"),
                        "John Frusciante",
                        null));
        USER_PROFILES.add(
                new UserProfile(UUID.fromString("951e8b1d-f617-4628-8a63-147bcee646c0"),
                        "Cory Wong",
                        null));
    }

    public List<UserProfile> getUserProfiles() {
        return USER_PROFILES;
    }
}
