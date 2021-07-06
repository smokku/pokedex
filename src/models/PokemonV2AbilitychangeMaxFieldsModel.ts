import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeMaxFieldsModelBase } from "./PokemonV2AbilitychangeMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeMaxFieldsModel */
export interface PokemonV2AbilitychangeMaxFieldsModelType extends Instance<typeof PokemonV2AbilitychangeMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeMaxFieldsModel */
export { selectFromPokemonV2AbilitychangeMaxFields, pokemonV2AbilitychangeMaxFieldsModelPrimitives, PokemonV2AbilitychangeMaxFieldsModelSelector } from "./PokemonV2AbilitychangeMaxFieldsModel.base"

/**
 * PokemonV2AbilitychangeMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2AbilitychangeMaxFieldsModel = PokemonV2AbilitychangeMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
