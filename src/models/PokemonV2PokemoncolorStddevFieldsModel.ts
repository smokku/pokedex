import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolorStddevFieldsModelBase } from "./PokemonV2PokemoncolorStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolorStddevFieldsModel */
export interface PokemonV2PokemoncolorStddevFieldsModelType extends Instance<typeof PokemonV2PokemoncolorStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolorStddevFieldsModel */
export { selectFromPokemonV2PokemoncolorStddevFields, pokemonV2PokemoncolorStddevFieldsModelPrimitives, PokemonV2PokemoncolorStddevFieldsModelSelector } from "./PokemonV2PokemoncolorStddevFieldsModel.base"

/**
 * PokemonV2PokemoncolorStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemoncolorStddevFieldsModel = PokemonV2PokemoncolorStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
