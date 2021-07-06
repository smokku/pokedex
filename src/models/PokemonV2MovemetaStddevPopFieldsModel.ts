import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaStddevPopFieldsModelBase } from "./PokemonV2MovemetaStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaStddevPopFieldsModel */
export interface PokemonV2MovemetaStddevPopFieldsModelType extends Instance<typeof PokemonV2MovemetaStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaStddevPopFieldsModel */
export { selectFromPokemonV2MovemetaStddevPopFields, pokemonV2MovemetaStddevPopFieldsModelPrimitives, PokemonV2MovemetaStddevPopFieldsModelSelector } from "./PokemonV2MovemetaStddevPopFieldsModel.base"

/**
 * PokemonV2MovemetaStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovemetaStddevPopFieldsModel = PokemonV2MovemetaStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
