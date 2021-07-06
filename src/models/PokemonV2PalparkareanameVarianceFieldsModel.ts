import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareanameVarianceFieldsModelBase } from "./PokemonV2PalparkareanameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareanameVarianceFieldsModel */
export interface PokemonV2PalparkareanameVarianceFieldsModelType extends Instance<typeof PokemonV2PalparkareanameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareanameVarianceFieldsModel */
export { selectFromPokemonV2PalparkareanameVarianceFields, pokemonV2PalparkareanameVarianceFieldsModelPrimitives, PokemonV2PalparkareanameVarianceFieldsModelSelector } from "./PokemonV2PalparkareanameVarianceFieldsModel.base"

/**
 * PokemonV2PalparkareanameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PalparkareanameVarianceFieldsModel = PokemonV2PalparkareanameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
