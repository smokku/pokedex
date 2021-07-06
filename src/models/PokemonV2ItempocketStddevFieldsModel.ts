import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketStddevFieldsModelBase } from "./PokemonV2ItempocketStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketStddevFieldsModel */
export interface PokemonV2ItempocketStddevFieldsModelType extends Instance<typeof PokemonV2ItempocketStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketStddevFieldsModel */
export { selectFromPokemonV2ItempocketStddevFields, pokemonV2ItempocketStddevFieldsModelPrimitives, PokemonV2ItempocketStddevFieldsModelSelector } from "./PokemonV2ItempocketStddevFieldsModel.base"

/**
 * PokemonV2ItempocketStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItempocketStddevFieldsModel = PokemonV2ItempocketStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
