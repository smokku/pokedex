import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityStddevPopFieldsModelBase } from "./PokemonV2AbilityStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityStddevPopFieldsModel */
export interface PokemonV2AbilityStddevPopFieldsModelType extends Instance<typeof PokemonV2AbilityStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityStddevPopFieldsModel */
export { selectFromPokemonV2AbilityStddevPopFields, pokemonV2AbilityStddevPopFieldsModelPrimitives, PokemonV2AbilityStddevPopFieldsModelSelector } from "./PokemonV2AbilityStddevPopFieldsModel.base"

/**
 * PokemonV2AbilityStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2AbilityStddevPopFieldsModel = PokemonV2AbilityStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
