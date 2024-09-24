import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, SubmitHandler } from 'react-hook-form';
import BackBtn from '../../components/BackBtn';
import NavMenu from '../../components/NavMenu';
import Btn from '../../components/Btn';
import { ColorsTemplate } from '../../constant/Color';
import CustomInputField from '../../components/CustomInputField';
import CustomSelect from '../../components/CustomSelect';
import { countryOptions } from '../../constant/countryOptions';

// Define form data interface
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  country: string;
  state: string;
  zipCode: string;
}

const EditProfile: React.FC = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data); // Handle form data
    // Perform navigation or any other action
  };

  return (
    <View style={styles.container}>
      <NavMenu />
      <View style={styles.headerContainer}>
        <BackBtn />
        <Text style={styles.headerText}>Edit Personal Info</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.profileCardContainer}>
          <View style={styles.profileCard}>
            {/* First Name Input */}
            <View style={styles.inputFieldContainer}>
              <CustomInputField
                label="First Name"
                name="firstName"
                control={control}
                rules={{ required: 'First Name is required' }}
                defaultValue="John"
              />
              {errors.firstName && (
                <Text style={styles.errorText}>{errors.firstName.message}</Text>
              )}
            </View>

            {/* Last Name Input */}
            <View style={styles.inputFieldContainer}>
              <CustomInputField
                label="Last Name"
                name="lastName"
                control={control}
                rules={{ required: 'Last Name is required' }}
                defaultValue="Doe"
              />
              {errors.lastName && (
                <Text style={styles.errorText}>{errors.lastName.message}</Text>
              )}
            </View>

            {/* Email Input */}
            <View style={styles.inputFieldContainer}>
              <CustomInputField
                label="Email ID"
                name="email"
                control={control}
                rules={{ required: 'Email is required' }}
                defaultValue="Johndoe@gmail.com"
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email.message}</Text>
              )}
            </View>

            {/* Mobile Number Input */}
            <View style={styles.inputFieldContainer}>
              <CustomInputField
                label="Mobile Number"
                name="mobile"
                control={control}
                rules={{ required: 'Mobile Number is required' }}
                defaultValue="+1 9999999900"
              />
              {errors.mobile && (
                <Text style={styles.errorText}>{errors.mobile.message}</Text>
              )}
            </View>

            {/* Country Dropdown */}
            <View style={styles.inputFieldContainer}>
              <CustomSelect
                label="Country"
                name="country"
                control={control}
                options={countryOptions}
                rules={{ required: 'Country is required' }}
                defaultValue="USA" // Set a default country if needed
              />
              {errors.country && (
                <Text style={styles.errorText}>{errors.country.message}</Text>
              )}
            </View>

            {/* State Input */}
            <View style={styles.inputFieldContainer}>
              <CustomInputField
                label="State"
                name="state"
                control={control}
                rules={{ required: 'State is required' }}
                defaultValue="New York"
              />
              {errors.state && (
                <Text style={styles.errorText}>{errors.state.message}</Text>
              )}
            </View>

            {/* Zip Code Input */}
            <View style={styles.inputFieldContainer}>
              <CustomInputField
                label="Zip Code"
                name="zipCode"
                control={control}
                rules={{ required: 'Zip Code is required' }}
                defaultValue="408888"
              />
              {errors.zipCode && (
                <Text style={styles.errorText}>{errors.zipCode.message}</Text>
              )}
            </View>


          </View>
        </View>
        {/* Save Button */}
        <View style={styles.buttonContainer}>
          <Btn
            btnLabel="Save"
            size={20}
            Press={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsTemplate?.Background,
  },
  headerContainer: {
    display: 'flex', flexDirection: 'row'
  },
  headerText: {
    marginLeft: 70,
    fontSize: 20,
    color: ColorsTemplate.Black
  },
  scrollViewContent: {
    alignItems: 'center',
    width: '100%',
  },
  profileCardContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  profileCard: {
    width: '90%',
    backgroundColor: ColorsTemplate?.White,
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: ColorsTemplate.Silver,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 10,
  },
  inputFieldContainer: {
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  buttonContainer: {
    marginBottom: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditProfile;
