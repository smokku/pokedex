import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketnameStddevPopFieldsModelBase } from "./PokemonV2ItempocketnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketnameStddevPopFieldsModel */
export interface PokemonV2ItempocketnameStddevPopFieldsModelType extends Instance<typeof PokemonV2ItempocketnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketnameStddevPopFieldsModel */
export { selectFromPokemonV2ItempocketnameStddevPopFields, pokemonV2ItempocketnameStddevPopFieldsModelPrimitives, PokemonV2ItempocketnameStddevPopFieldsModelSelector } from "./PokemonV2ItempocketnameStddevPopFieldsModel.base"

/**
 * PokemonV2ItempocketnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItempocketnameStddevPopFieldsModel = PokemonV2ItempocketnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
