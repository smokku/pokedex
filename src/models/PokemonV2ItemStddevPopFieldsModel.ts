import { Instance } from "mobx-state-tree"
import { PokemonV2ItemStddevPopFieldsModelBase } from "./PokemonV2ItemStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemStddevPopFieldsModel */
export interface PokemonV2ItemStddevPopFieldsModelType extends Instance<typeof PokemonV2ItemStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemStddevPopFieldsModel */
export { selectFromPokemonV2ItemStddevPopFields, pokemonV2ItemStddevPopFieldsModelPrimitives, PokemonV2ItemStddevPopFieldsModelSelector } from "./PokemonV2ItemStddevPopFieldsModel.base"

/**
 * PokemonV2ItemStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemStddevPopFieldsModel = PokemonV2ItemStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
