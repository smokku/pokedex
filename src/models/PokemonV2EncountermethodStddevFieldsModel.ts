import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodStddevFieldsModelBase } from "./PokemonV2EncountermethodStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodStddevFieldsModel */
export interface PokemonV2EncountermethodStddevFieldsModelType extends Instance<typeof PokemonV2EncountermethodStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodStddevFieldsModel */
export { selectFromPokemonV2EncountermethodStddevFields, pokemonV2EncountermethodStddevFieldsModelPrimitives, PokemonV2EncountermethodStddevFieldsModelSelector } from "./PokemonV2EncountermethodStddevFieldsModel.base"

/**
 * PokemonV2EncountermethodStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2EncountermethodStddevFieldsModel = PokemonV2EncountermethodStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
