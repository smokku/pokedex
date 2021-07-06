import { Instance } from "mobx-state-tree"
import { PokemonV2ItemStddevFieldsModelBase } from "./PokemonV2ItemStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemStddevFieldsModel */
export interface PokemonV2ItemStddevFieldsModelType extends Instance<typeof PokemonV2ItemStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemStddevFieldsModel */
export { selectFromPokemonV2ItemStddevFields, pokemonV2ItemStddevFieldsModelPrimitives, PokemonV2ItemStddevFieldsModelSelector } from "./PokemonV2ItemStddevFieldsModel.base"

/**
 * PokemonV2ItemStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemStddevFieldsModel = PokemonV2ItemStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
