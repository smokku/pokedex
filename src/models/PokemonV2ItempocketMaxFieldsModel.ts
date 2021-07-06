import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketMaxFieldsModelBase } from "./PokemonV2ItempocketMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketMaxFieldsModel */
export interface PokemonV2ItempocketMaxFieldsModelType extends Instance<typeof PokemonV2ItempocketMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketMaxFieldsModel */
export { selectFromPokemonV2ItempocketMaxFields, pokemonV2ItempocketMaxFieldsModelPrimitives, PokemonV2ItempocketMaxFieldsModelSelector } from "./PokemonV2ItempocketMaxFieldsModel.base"

/**
 * PokemonV2ItempocketMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItempocketMaxFieldsModel = PokemonV2ItempocketMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
