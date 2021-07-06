import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityMaxFieldsModelBase } from "./PokemonV2AbilityMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityMaxFieldsModel */
export interface PokemonV2AbilityMaxFieldsModelType extends Instance<typeof PokemonV2AbilityMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityMaxFieldsModel */
export { selectFromPokemonV2AbilityMaxFields, pokemonV2AbilityMaxFieldsModelPrimitives, PokemonV2AbilityMaxFieldsModelSelector } from "./PokemonV2AbilityMaxFieldsModel.base"

/**
 * PokemonV2AbilityMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2AbilityMaxFieldsModel = PokemonV2AbilityMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
