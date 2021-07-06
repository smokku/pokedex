import { Instance } from "mobx-state-tree"
import { PokemonV2PokemondexnumberVarianceFieldsModelBase } from "./PokemonV2PokemondexnumberVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemondexnumberVarianceFieldsModel */
export interface PokemonV2PokemondexnumberVarianceFieldsModelType extends Instance<typeof PokemonV2PokemondexnumberVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemondexnumberVarianceFieldsModel */
export { selectFromPokemonV2PokemondexnumberVarianceFields, pokemonV2PokemondexnumberVarianceFieldsModelPrimitives, PokemonV2PokemondexnumberVarianceFieldsModelSelector } from "./PokemonV2PokemondexnumberVarianceFieldsModel.base"

/**
 * PokemonV2PokemondexnumberVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemondexnumberVarianceFieldsModel = PokemonV2PokemondexnumberVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
