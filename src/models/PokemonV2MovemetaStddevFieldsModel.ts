import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaStddevFieldsModelBase } from "./PokemonV2MovemetaStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaStddevFieldsModel */
export interface PokemonV2MovemetaStddevFieldsModelType extends Instance<typeof PokemonV2MovemetaStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaStddevFieldsModel */
export { selectFromPokemonV2MovemetaStddevFields, pokemonV2MovemetaStddevFieldsModelPrimitives, PokemonV2MovemetaStddevFieldsModelSelector } from "./PokemonV2MovemetaStddevFieldsModel.base"

/**
 * PokemonV2MovemetaStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovemetaStddevFieldsModel = PokemonV2MovemetaStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
