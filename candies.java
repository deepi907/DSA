import java.util.ArrayList;
import java.util.List;

public class candies {

    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        List<Boolean> ans  = new ArrayList<>(candies.length);
        int maxi = -9999999;
        for( int i = 0 ; i < candies.length; i++) {
            maxi = Math.max(maxi,candies[i]);

        }
        for (int i : candies) {
            ans.add(i >= maxi - extraCandies);
        }
        return ans;
    }

}

