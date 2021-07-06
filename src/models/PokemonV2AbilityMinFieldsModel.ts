import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityMinFieldsModelBase } from "./PokemonV2AbilityMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityMinFieldsModel */
export interface PokemonV2AbilityMinFieldsModelType extends Instance<typeof PokemonV2AbilityMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityMinFieldsModel */
export { selectFromPokemonV2AbilityMinFields, pokemonV2AbilityMinFieldsModelPrimitives, PokemonV2AbilityMinFieldsModelSelector } from "./PokemonV2AbilityMinFieldsModel.base"

/**
 * PokemonV2AbilityMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2AbilityMinFieldsModel = PokemonV2AbilityMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
