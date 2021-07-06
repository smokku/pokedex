import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavorMaxFieldsModelBase } from "./PokemonV2BerryflavorMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavorMaxFieldsModel */
export interface PokemonV2BerryflavorMaxFieldsModelType extends Instance<typeof PokemonV2BerryflavorMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavorMaxFieldsModel */
export { selectFromPokemonV2BerryflavorMaxFields, pokemonV2BerryflavorMaxFieldsModelPrimitives, PokemonV2BerryflavorMaxFieldsModelSelector } from "./PokemonV2BerryflavorMaxFieldsModel.base"

/**
 * PokemonV2BerryflavorMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2BerryflavorMaxFieldsModel = PokemonV2BerryflavorMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
