import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolorStddevPopFieldsModelBase } from "./PokemonV2PokemoncolorStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolorStddevPopFieldsModel */
export interface PokemonV2PokemoncolorStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemoncolorStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolorStddevPopFieldsModel */
export { selectFromPokemonV2PokemoncolorStddevPopFields, pokemonV2PokemoncolorStddevPopFieldsModelPrimitives, PokemonV2PokemoncolorStddevPopFieldsModelSelector } from "./PokemonV2PokemoncolorStddevPopFieldsModel.base"

/**
 * PokemonV2PokemoncolorStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemoncolorStddevPopFieldsModel = PokemonV2PokemoncolorStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
