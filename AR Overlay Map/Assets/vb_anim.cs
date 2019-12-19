using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Vuforia;

public class vb_anim : MonoBehaviour, IVirtualButtonEventHandler { 

    public GameObject vbBtnObj;
    public Animator SphereAnim;

    // Start is called before the first frame update
    void Start() { 
        vbBtnObj = GameObject.Find("TestBtn");
        vbBtnObj.GetComponent<VirtualButtonBehaviour>().RegisterEventHandler(this);
        SphereAnim.GetComponent<Animator>();

    }
    
    public void OnButtonPressed(VirtualButtonBehaviour vb)
    {
        SphereAnim.Play("cube_animation");
        Debug.Log("Btn Pressed");
    }
    
    public void OnButtonReleased(VirtualButtonBehaviour vb)
    {
        SphereAnim.Play("none");
        Debug.Log("Btn Released");
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
