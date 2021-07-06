import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetnameStddevFieldsModelBase } from "./PokemonV2MovetargetnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetnameStddevFieldsModel */
export interface PokemonV2MovetargetnameStddevFieldsModelType extends Instance<typeof PokemonV2MovetargetnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetnameStddevFieldsModel */
export { selectFromPokemonV2MovetargetnameStddevFields, pokemonV2MovetargetnameStddevFieldsModelPrimitives, PokemonV2MovetargetnameStddevFieldsModelSelector } from "./PokemonV2MovetargetnameStddevFieldsModel.base"

/**
 * PokemonV2MovetargetnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovetargetnameStddevFieldsModel = PokemonV2MovetargetnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
