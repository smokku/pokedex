import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareanameMaxFieldsModelBase } from "./PokemonV2PalparkareanameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareanameMaxFieldsModel */
export interface PokemonV2PalparkareanameMaxFieldsModelType extends Instance<typeof PokemonV2PalparkareanameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareanameMaxFieldsModel */
export { selectFromPokemonV2PalparkareanameMaxFields, pokemonV2PalparkareanameMaxFieldsModelPrimitives, PokemonV2PalparkareanameMaxFieldsModelSelector } from "./PokemonV2PalparkareanameMaxFieldsModel.base"

/**
 * PokemonV2PalparkareanameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PalparkareanameMaxFieldsModel = PokemonV2PalparkareanameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
