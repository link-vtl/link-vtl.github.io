using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ChangeImage : MonoBehaviour 
{
    public Sprite[] images;
    public Image imageContainer;
    // Start is called before the first frame update
    public void SetImage(int index)
        {
            if (images.Length >= index)
            {
                imageContainer.sprite = images[index];
            } else
            {
                Debug.LogError("Invalid image index: " + index);
            }
        }
        

    // Update is called once per frame
    void Update()
    {
        
    }
}
