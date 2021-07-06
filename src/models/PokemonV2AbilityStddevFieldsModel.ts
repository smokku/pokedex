import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityStddevFieldsModelBase } from "./PokemonV2AbilityStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityStddevFieldsModel */
export interface PokemonV2AbilityStddevFieldsModelType extends Instance<typeof PokemonV2AbilityStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityStddevFieldsModel */
export { selectFromPokemonV2AbilityStddevFields, pokemonV2AbilityStddevFieldsModelPrimitives, PokemonV2AbilityStddevFieldsModelSelector } from "./PokemonV2AbilityStddevFieldsModel.base"

/**
 * PokemonV2AbilityStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2AbilityStddevFieldsModel = PokemonV2AbilityStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
