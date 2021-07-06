import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketnameStddevFieldsModelBase } from "./PokemonV2ItempocketnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketnameStddevFieldsModel */
export interface PokemonV2ItempocketnameStddevFieldsModelType extends Instance<typeof PokemonV2ItempocketnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketnameStddevFieldsModel */
export { selectFromPokemonV2ItempocketnameStddevFields, pokemonV2ItempocketnameStddevFieldsModelPrimitives, PokemonV2ItempocketnameStddevFieldsModelSelector } from "./PokemonV2ItempocketnameStddevFieldsModel.base"

/**
 * PokemonV2ItempocketnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItempocketnameStddevFieldsModel = PokemonV2ItempocketnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
