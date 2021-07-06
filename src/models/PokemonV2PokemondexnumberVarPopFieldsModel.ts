import { Instance } from "mobx-state-tree"
import { PokemonV2PokemondexnumberVarPopFieldsModelBase } from "./PokemonV2PokemondexnumberVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemondexnumberVarPopFieldsModel */
export interface PokemonV2PokemondexnumberVarPopFieldsModelType extends Instance<typeof PokemonV2PokemondexnumberVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemondexnumberVarPopFieldsModel */
export { selectFromPokemonV2PokemondexnumberVarPopFields, pokemonV2PokemondexnumberVarPopFieldsModelPrimitives, PokemonV2PokemondexnumberVarPopFieldsModelSelector } from "./PokemonV2PokemondexnumberVarPopFieldsModel.base"

/**
 * PokemonV2PokemondexnumberVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemondexnumberVarPopFieldsModel = PokemonV2PokemondexnumberVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
