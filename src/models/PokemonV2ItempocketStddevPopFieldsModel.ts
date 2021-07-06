import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketStddevPopFieldsModelBase } from "./PokemonV2ItempocketStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketStddevPopFieldsModel */
export interface PokemonV2ItempocketStddevPopFieldsModelType extends Instance<typeof PokemonV2ItempocketStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketStddevPopFieldsModel */
export { selectFromPokemonV2ItempocketStddevPopFields, pokemonV2ItempocketStddevPopFieldsModelPrimitives, PokemonV2ItempocketStddevPopFieldsModelSelector } from "./PokemonV2ItempocketStddevPopFieldsModel.base"

/**
 * PokemonV2ItempocketStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItempocketStddevPopFieldsModel = PokemonV2ItempocketStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
