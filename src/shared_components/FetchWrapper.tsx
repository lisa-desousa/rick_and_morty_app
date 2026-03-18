import React from "react";
import { ActivityIndicator } from "react-native";
import { Text } from "react-native";

type WrapperProps = {
  loading: boolean;
  error: Error | null;
  children: React.ReactNode;
};

export function FetchWrapper({ loading, error, children }: WrapperProps) {
  if (loading) return <ActivityIndicator />;
  if (error)
    return (
      <Text style={{ textAlign: "center" }}>
        Oops! Something went wrong. Error: {error.message}
      </Text>
    );
  return <>{children}</>;
}
