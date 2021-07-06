import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodStddevPopFieldsModelBase } from "./PokemonV2EncountermethodStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodStddevPopFieldsModel */
export interface PokemonV2EncountermethodStddevPopFieldsModelType extends Instance<typeof PokemonV2EncountermethodStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodStddevPopFieldsModel */
export { selectFromPokemonV2EncountermethodStddevPopFields, pokemonV2EncountermethodStddevPopFieldsModelPrimitives, PokemonV2EncountermethodStddevPopFieldsModelSelector } from "./PokemonV2EncountermethodStddevPopFieldsModel.base"

/**
 * PokemonV2EncountermethodStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EncountermethodStddevPopFieldsModel = PokemonV2EncountermethodStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
