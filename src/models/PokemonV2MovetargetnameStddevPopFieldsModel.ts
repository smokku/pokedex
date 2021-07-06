import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetnameStddevPopFieldsModelBase } from "./PokemonV2MovetargetnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetnameStddevPopFieldsModel */
export interface PokemonV2MovetargetnameStddevPopFieldsModelType extends Instance<typeof PokemonV2MovetargetnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetnameStddevPopFieldsModel */
export { selectFromPokemonV2MovetargetnameStddevPopFields, pokemonV2MovetargetnameStddevPopFieldsModelPrimitives, PokemonV2MovetargetnameStddevPopFieldsModelSelector } from "./PokemonV2MovetargetnameStddevPopFieldsModel.base"

/**
 * PokemonV2MovetargetnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovetargetnameStddevPopFieldsModel = PokemonV2MovetargetnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
