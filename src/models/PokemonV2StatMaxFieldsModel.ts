import { Instance } from "mobx-state-tree"
import { PokemonV2StatMaxFieldsModelBase } from "./PokemonV2StatMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatMaxFieldsModel */
export interface PokemonV2StatMaxFieldsModelType extends Instance<typeof PokemonV2StatMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatMaxFieldsModel */
export { selectFromPokemonV2StatMaxFields, pokemonV2StatMaxFieldsModelPrimitives, PokemonV2StatMaxFieldsModelSelector } from "./PokemonV2StatMaxFieldsModel.base"

/**
 * PokemonV2StatMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2StatMaxFieldsModel = PokemonV2StatMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
